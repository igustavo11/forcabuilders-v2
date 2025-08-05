"use client"

import { useState } from "react"
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { categories, projects } from "@/ultils/portfolio"

const allCategories = [
  { id: "all", label: "All" },
  ...categories
]

interface ImageData {
  src: string;
  title: string;
}

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

  // Função para gerar array de todas as imagens quando categoria específica é selecionada
  const getAllImagesFromCategory = (): ImageData[] => {
    if (activeCategory === "all") return []
    
    const categoryProjects = projects.filter((project) => project.category === activeCategory)
    const allImages: ImageData[] = []
    
    categoryProjects.forEach((project) => {
      project.images.forEach((image) => {
        allImages.push({
          src: image,
          title: project.title,
        })
      })
    })
    
    return allImages
  }

  const categoryImages = getAllImagesFromCategory()

  // Função para abrir modal com todas as imagens da categoria
  const openCategoryModal = (startIndex: number) => {
    const allCategoryImages = getAllImagesFromCategory()
    const tempProject = {
      id: 999,
      title: "",
      location: "",
      category: activeCategory,
      images: allCategoryImages.map(img => img.src)
    }
    setSelectedProject(tempProject)
    setCurrentImageIndex(startIndex)
  }

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
  }

  const handleProjectSelect = (project: typeof projects[0]) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
  }

  return (
    <>
      <main className="mx-auto max-w-6xl px-6 py-16">
        {/* Filter Tabs */}
        <div className="mb-12 flex justify-center gap-8">
          {allCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
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

        {/* Projects Grid - Show projects with titles when "All" is selected */}
        {activeCategory === "all" && (
          <motion.div 
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            layout
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={`${activeCategory}-${project.id}`}
                  className="group cursor-pointer"
                  onClick={() => handleProjectSelect(project)}
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
                      quality={80}
                      {...(index === 0 ? { priority: true } : { loading: "lazy" })}
                      />
                  </div>
                  <motion.div 
                    className="mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                  >
                    <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Images Grid - Show only images when specific category is selected */}
        {activeCategory !== "all" && (
          <motion.div 
            className="grid gap-4 md:grid-cols-3 lg:grid-cols-4"
            layout
          >
            <AnimatePresence mode="wait">
              {categoryImages.map((image, index) => (
                <motion.div
                  key={`${activeCategory}-image-${index}`}
                  className="group cursor-pointer"
                  onClick={() => openCategoryModal(index)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.25,
                    delay: index * 0.02,
                    ease: "easeOut"
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="overflow-hidden rounded-lg bg-gray-200 relative">
                    <Image
                      src={image.src}
                      alt={`Gallery image ${index + 1}`}
                      width={600}
                      height={400}
                      className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      quality={80}
                      {...(index === 0 ? { priority: true } : { loading: "lazy" })}
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </main>

      {/* Project Modal */}
      <Dialog 
        open={!!selectedProject} 
        onOpenChange={(open) => {
          if (!open) {
            handleCloseModal()
          }
        }}
      >
        <DialogContent className="max-w-5xl p-0">
          <DialogHeader className="sr-only">
            <DialogTitle>{selectedProject?.title || "Project Details"}</DialogTitle>
          </DialogHeader>
          {selectedProject && (
            <div className="relative">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 z-10 rounded-full bg-white/90 hover:bg-white shadow-lg"
                onClick={handleCloseModal}
              >
                <X className="h-4 w-4" />
              </Button>

              {/* Image */}
              <div className="relative bg-gray-200">
                <Image
                  src={selectedProject.images[currentImageIndex]}
                  alt={selectedProject.title || `Project image ${currentImageIndex + 1}`}
                  width={1200}
                  height={900}
                  className="w-full h-auto object-contain max-h-[80vh]"
                  quality={80}
                  loading="lazy"
                />

                {/* Navigation - Always show if there are multiple images */}
                {selectedProject.images.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white shadow-lg"
                      onClick={prevImage}
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white shadow-lg"
                      onClick={nextImage}
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </>
                )}

                {/* Image Counter - Always show if there are multiple images */}
                {selectedProject.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/80 px-4 py-2 text-sm text-white font-medium shadow-lg">
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </div>
                )}
              </div>

              {/* Project Info - Only show when activeCategory is "all" */}
              {activeCategory === "all" && selectedProject.title && (
                <div className="p-6">
                  <h2 className="text-2xl font-medium text-gray-900">{selectedProject.title}</h2>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}