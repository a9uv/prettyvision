import { Button, Card, CardContent } from "@/components/ui/Elements"
import { Instagram, Heart, Star, Users, Menu } from "lucide-react"
import Navbar from "@/components/Navbar"
import Image from "next/image"

export default function HomePage() {
  return (
  <div className="min-h-screen" style={{ backgroundColor: "#fff7fc" }}>
      {/* Navbar */}
          <Navbar />
      {/* <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4" style={{ backgroundColor: "#fff7fc" }}>
        <div className="container mx-auto flex items-center justify-between">
          <div className="font-serif font-bold text-2xl" style={{ color: "#ff66c4" }}>
            Pretty Visions
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="font-sans text-gray-700 hover:text-[#ff66c4] transition-colors">
              Services
            </a>
            <a href="#about" className="font-sans text-gray-700 hover:text-[#ff66c4] transition-colors">
              About
            </a>
            <a href="#testimonials" className="font-sans text-gray-700 hover:text-[#ff66c4] transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="font-sans text-gray-700 hover:text-[#ff66c4] transition-colors">
              Contact
            </a>
          </div>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url(/event2.png)]"
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
            
            <Image
              src="/pv_hero.png" // IMPORTANT: Replace with your logo's path
              alt="Pretty Visions Logo"
              width={300} // Adjust width as needed
              height={100} // Adjust height as needed
              className="h-auto mx-auto mb-6" // Keeps the aspect ratio

            />
            {/* <h1
              className="font-serif font-black text-3xl md:text-5xl lg:text-6xl mb-6 leading-tight"
              style={{ color: "#ff66c4" }}
            >
              Pretty Visions Decoration
            </h1> */}
            <p className="font-sans text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Crafting Beautiful Spaces for Your Memories all Over Southern Wisconsin since 2020
            </p>

            {/* Instagram Link */}
            <div className="flex justify-center mb-8">
               <a href="https://www.instagram.com/pretty_vision_by_prativa/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="font-dekko text-xl bg-white/80 hover:bg-[#ff66c4] hover:text-white transition-all duration-300 border-2 border-[#ff66c4]/20 hover:border-[#ff66c4] shadow-lg"
                style={{ borderColor: "#ff66c4" }}
              >
                <Instagram className="w-6 h-6 mr-2" />
                Follow Our Journey
                </Button>
                </a>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="text-white font-dekko text-xl px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ backgroundColor: "#ff66c4" }}
            >
              Explore Our Services
            </Button>
          </div>
        </div>

        {/* Soft Glow Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-[#ff66c4]/10 via-transparent to-transparent pointer-events-none"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-6">Creating Magical Moments</h2>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-12">
              Since 2020, we&apos;ve been transforming ordinary spaces into extraordinary experiences throughout Southern
              Wisconsin. Our passion lies in bringing your vision to life with elegant decorations that reflect your
              unique style and create lasting memories for you and your loved ones.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-foreground mb-2">500+</h3>
                <p className="font-sans text-muted-foreground">Events Decorated</p>
              </div>
              <div className="text-center">
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-foreground mb-2">5 Stars</h3>
                <p className="font-sans text-muted-foreground">Average Rating</p>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-foreground mb-2">4 Years</h3>
                <p className="font-sans text-muted-foreground">Serving Wisconsin</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20" style={{ backgroundColor: "#fff7fc" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-6">Our Services</h2>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we create beautiful spaces that tell your story
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-8 text-center">
                <div
                  className="w-full h-48 bg-cover bg-center rounded-lg mb-6"
                  style={{
                    backgroundImage: `url('/event1.png')`,
                  }}
                ></div>
                <h3 className="font-serif font-bold text-xl text-foreground mb-4">Wedding Decorations</h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  Transform your special day with romantic florals, elegant centerpieces, and dreamy lighting that
                  creates the perfect atmosphere for your love story.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/20">
              <CardContent className="p-8 text-center">
                <div
                  className="w-full h-48 bg-cover bg-center rounded-lg mb-6"
                  style={{
                    backgroundImage: `url('/event2.png')`,
                  }}
                ></div>
                <h3 className="font-serif font-bold text-xl text-foreground mb-4">Birthday Celebrations</h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  Make birthdays unforgettable with custom themes, vibrant colors, and playful decorations that bring
                  joy and excitement to every age.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/20">
              <CardContent className="p-8 text-center">
                <div
                  className="w-full h-48 bg-cover bg-center rounded-lg mb-6"
                  style={{
                    backgroundImage: `url('/event2.png')`,
                  }}
                ></div>
                <h3 className="font-serif font-bold text-xl text-foreground mb-4">Corporate Events</h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  Elevate your business gatherings with sophisticated decorations that reflect your brand and create a
                  professional yet welcoming environment.
                </p>
              </CardContent>
            </Card>

                        <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/20">
              <CardContent className="p-8 text-center">
                <div
                  className="w-full h-48 bg-cover bg-center rounded-lg mb-6"
                  style={{
                    backgroundImage: `url('/event2.png')`,
                  }}
                ></div>
                <h3 className="font-serif font-bold text-xl text-foreground mb-4">Gunyo Cholo</h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  Make your little girl&apos;s special day amazing.
                </p>
              </CardContent>
            </Card>

                        <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/20">
              <CardContent className="p-8 text-center">
                <div
                  className="w-full h-48 bg-cover bg-center rounded-lg mb-6"
                  style={{
                    backgroundImage: `url('/event2.png')`,
                  }}
                ></div>
                <h3 className="font-serif font-bold text-xl text-foreground mb-4">Rice Feeding</h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  A memorable experience with fantastic decorations, Pretty Visions will make your child&apos;s Rice Feeding
                  wonderful.
                </p>
              </CardContent>
            </Card>

                        <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/20">
              <CardContent className="p-8 text-center">
                <div
                  className="w-full h-48 bg-cover bg-center rounded-lg mb-6"
                  style={{
                    backgroundImage: `url('/event2.png')`,
                  }}
                ></div>
                <h3 className="font-serif font-bold text-xl text-foreground mb-4">Ani Aru?</h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  Elevate your business gatherings with sophisticated decorations that reflect your brand and create a
                  professional yet welcoming environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-6 text-gray-800">What Our Clients Say</h2>
            <p className="font-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Don&apos;t just take our word for it - hear from the families we&apos;ve helped create beautiful memories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white text-gray-800 shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#ff66c4] text-[#ff66c4]" />
                  ))}
                </div>
                <p className="font-sans text-gray-600 mb-4 leading-relaxed">
                  &quot;Pretty Visions made our wedding absolutely magical! Every detail was perfect, and our guests are
                  still talking about how beautiful everything looked.&quot;
                </p>
                <p className="font-serif font-semibold text-gray-800">- Pradip and Ashmi</p>
              </CardContent>
            </Card>

            <Card className="bg-white text-gray-800 shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#ff66c4] text-[#ff66c4]" />
                  ))}
                </div>
                <p className="font-sans text-gray-600 mb-4 leading-relaxed">
                  &quot;They transformed our daughter&apos;s gunyo cholo into a fairytale! The attention to detail and creativity
                  exceeded all our expectations.&quot;
                </p>
                <p className="font-serif font-semibold text-gray-800">- Abiskar B.</p>
              </CardContent>
            </Card>

            <Card className="bg-white text-gray-800 shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#ff66c4] text-[#ff66c4]" />
                  ))}
                </div>
                <p className="font-sans text-gray-600 mb-4 leading-relaxed">
                  &quot;Professional, creative, and so easy to work with! They brought our son&apos;s birthday vision to life
                  beautifully.&quot;
                </p>
                <p className="font-serif font-semibold text-gray-800">- Srijana G.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20" style={{ backgroundColor: "#fff7fc" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-gray-800 mb-6">
              Let&apos;s Create Something Beautiful Together
            </h2>
            <p className="font-sans text-lg text-gray-600 mb-12 leading-relaxed">
              Ready to transform your event into an unforgettable experience? We&apos;d love to hear about your vision and
              bring it to life.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h3 className="font-serif font-bold text-xl text-gray-800 mb-4">Get In Touch</h3>
                <div className="space-y-4 font-sans text-gray-600">
                  <p>📧 hello@prettyvisions.com</p>
                  {/* <p>📱 (555) 123-4567</p> */}
                  <p>📍 Serving all of Southern Wisconsin</p>
                </div>

                <div className="mt-8">
                  <a href="https://www.instagram.com/pretty_vision_by_prativa/" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                      className="bg-[#ff66c4] text-white border-2
  border-transparent hover:bg-white hover:text-[#ff66c4] hover:border-[#ff66c4] 
  shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5 mr-2" />
                    Follow Us on Instagram
                    </Button>
                    </a>
                </div>
              </div>

              <div
                className="w-full h-64 bg-cover bg-center rounded-lg shadow-lg"
                style={{
                  backgroundImage: `url('/event2.png')`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
