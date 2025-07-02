'use client';
import Image from 'next/image';
import { Mail, MapPin, Phone, Instagram, Youtube, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Contact(){

    const createMessageFormSchema = z.object ({
    name: z.string().nonempty('Name is required'),
    email: z.string().nonempty('Email is required').email('Invalid format'),
    phone: z.string().nonempty('Phone number is required').regex(/^\d+$/, 'Enter numbers only'),
    message: z.string().nonempty('Required field'),
  })

  type createMessageFormData = z.infer<typeof createMessageFormSchema>
    const { 
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<createMessageFormData>({
    resolver: zodResolver(createMessageFormSchema),
  })

  function handleFormSubmit(data: createMessageFormData) {
        const templateParams = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message,
        };

        emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            )
            .then(
                () => {
                    toast.success('Message sent successfully!', {
                        position: "top-center",
                        autoClose: 3000
                    });
                },
                (error) => {
                    toast.error('Failed to send. Please try again.', {
                        position: "top-center",
                        autoClose: 3000
                    });
                    console.error('EmailJS error:', error);
                }
            );
    } 

  return(
     <div className="w-full relative -mt-32">
                <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
                    <div className="absolute inset-0 bg-black/30 z-10"></div>
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white drop-shadow-2xl mb-4">
                                CONTACT
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white drop-shadow-lg font-medium">
                                Get in Touch with Our Team
                            </p>
                        </div>
                    </div>
                    <div className="relative w-full h-full">
                        <Image
                            src="/img/top-image/contact.png"
                            alt="Contact Banner - Get in Touch with Our Professional Team"
                            fill
                            className="object-cover object-center"
                            quality={100}
                            priority
                            unoptimized
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                        />
                    </div>
                </div>

      <section className="w-full px-4 md:px-12 lg:px-24 py-20 bg-white">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    <div className="space-y-8 mx-auto w-full max-w-[450px]">
          <div className="w-full max-w-[450px]">
          <Image
              src="/img/contact.jpg"
              alt="Contact"
              width={500}
              height={300}
              className="w-full rounded-lg object-cover"
          />
          </div>

            <div className="space-y-6 text-gray-800">
              <div className="flex gap-4 items-start">
                <MapPin className="text-colorprimary" size={24} />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p>114 Essex St, Rochelle Park, NJ 07662, Unit 114.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Phone className="text-colorprimary" size={24} />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p>973-449-5343</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Mail className="text-colorprimary" size={24} />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p>jean@forcabuilders.com</p>
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <Link href="https://www.instagram.com/forcabuilders/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="text-colorprimary" size={30} />
                </Link>
                <Link href="https://wa.me/19734495343?" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="text-colorprimary" size={30} />
                </Link>
                <Link href="https://www.youtube.com/@forcabuilders" target="_blank" rel="noopener noreferrer">
                  <Youtube className="text-colorprimary" size={30} />
                </Link>
              </div>
            </div>
          </div>

        
          <div className="space-y-6 mx-auto w-full max-w-[450px]"> 
            <h3 className="text-3xl font-bold text-colorprimary mb-4">Send us a message</h3>

            <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4" id="contact-form">
              <div>
                <input
                  type="text"
                  placeholder="Name *"
                  className="w-full bg-gray-100 text-gray-800 placeholder-gray-500 px-4 py-4 rounded-md focus:outline-none"
                  {...register('name')}
                />
                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email *"
                  className="w-full bg-gray-100 text-gray-800 placeholder-gray-500 px-4 py-4 rounded-md focus:outline-none"
                  {...register('email')}
                
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <input
                type="tel"
                placeholder="Phone *"
                className="w-full bg-gray-100 text-gray-800 placeholder-gray-500 px-4 py-4 rounded-md focus:outline-none"
                {...register('phone')}
              />
              {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>}
              </div>

              <div>
              <textarea
                placeholder="Message *"
                rows={6}
                className="w-full bg-gray-100 text-gray-800 placeholder-gray-500 px-4 py-4 rounded-md focus:outline-none"
                {...register('message')}
            ></textarea>
            {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
            </div>

              <button
                type="submit"
                className="bg-colorprimary hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
      
      <ToastContainer /> {/* Add this at the end of your component */}
            </div>

      
    )
}