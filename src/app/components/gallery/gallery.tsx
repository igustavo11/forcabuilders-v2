"use client"

import { useState } from "react"
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X, MapPin } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { categories, projects } from "@/ultils/portfolio"

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1))
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1))
    }
  }

  return (
    <>
      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 flex justify-center gap-8">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`text-sm font-medium transition-colors relative ${
                activeCategory === category.id
                  ? "text-colorprimary"
                  : "text-gray-500 hover:text-colorprimary"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
              {activeCategory === category.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-colorprimary"
                  layoutId="activeTab"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25
                  }}
                />
              )}
            </motion.button>
          ))}
        </div>

        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${activeCategory}-${project.id}`}
                className="group cursor-pointer"
                onClick={() => {
                  setSelectedProject(project)
                  setCurrentImageIndex(0)
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.25,
                  delay: index * 0.05,
                  ease: "easeOut"
                }}
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="overflow-hidden rounded-lg bg-gray-200 relative">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                  />
                </div>
                <motion.div 
                  className="mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 + 0.1 }}
                >
                  <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                  <div className="mt-1 flex items-center text-sm text-gray-500">
                    <MapPin className="mr-1 h-4 w-4" />
                    {project.location}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

      {/* Project Modal */}
      <Dialog 
        open={!!selectedProject} 
        onOpenChange={(open) => {
          if (!open) {
            setSelectedProject(null)
          }
        }}
      >
        <DialogContent className="max-w-4xl p-0">
          <DialogHeader className="sr-only">
            <DialogTitle>{selectedProject?.title || "Project Details"}</DialogTitle>
          </DialogHeader>
          {selectedProject && (
            <div className="relative">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 z-10 rounded-full bg-white/90 hover:bg-white"
                onClick={() => setSelectedProject(null)}
              >
                <X className="h-4 w-4" />
              </Button>

              {/* Image */}
              <div className="relative bg-gray-200">
                <Image
                  src={selectedProject.images[currentImageIndex]}
                  alt={selectedProject.title}
                  width={800}
                  height={600}
                  className="aspect-[4/3] w-full object-cover"
                  unoptimized
                />

                {/* Navigation */}
                {selectedProject.images.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white"
                      onClick={nextImage}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </>
                )}

                {/* Image Counter */}
                {selectedProject.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-3 py-1 text-sm text-white">
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h2 className="text-2xl font-medium text-gray-900">{selectedProject.title}</h2>
                <div className="mt-2 flex items-center text-gray-500">
                  <MapPin className="mr-1 h-4 w-4" />
                  {selectedProject.location}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}