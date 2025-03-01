import React from 'react';
import { Phone, MapPin, Clock, Shield, PenTool, Flame, CheckCircle, ArrowRight, Star, Home as HomeIcon } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="h-screen relative bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://i.postimg.cc/1XLgQKXJ/1670010673315.jpg")'
        }}
      >
        <nav className="absolute top-0 left-0 right-0 z-20">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Flame className="w-8 h-8 text-red-500 mr-3" />
                <h1 className="text-white text-2xl font-bold">Good Chimney Services</h1>
              </div>
              <div className="flex items-center space-x-8">
                <a href="#services" className="text-white hover:text-red-400 transition-colors">Services</a>
                <a href="#about" className="text-white hover:text-red-400 transition-colors">About</a>
                <a href="#contact" className="text-white hover:text-red-400 transition-colors">Contact</a>
                <a href="tel:8643786065" className="bg-red-600 text-white px-6 py-3 rounded-lg flex items-center hover:bg-red-700 transition-colors">
                  <Phone className="w-5 h-5 mr-2" />
                  (864) 378-6065
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-4 mb-6">
              <Star className="w-8 h-8 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">Trusted Chimney Experts in Upstate SC</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">Professional Chimney Services</h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">Serving Anderson, Abbeville, Greenville, Greenwood, and surrounding areas with expert chimney care since 2013</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center group transition-all">
                Schedule Service
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:8643786065" className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 inline-flex items-center justify-center transition-all">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-32"></div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Led by Rick Good, we bring decades of experience and dedication to every project, ensuring your chimney is safe and well-maintained.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield className="w-12 h-12 text-red-600" />}
              title="Licensed & Insured"
              description="Full coverage and protection for your peace of mind"
            />
            <FeatureCard
              icon={<PenTool className="w-12 h-12 text-red-600" />}
              title="Expert Service"
              description="Professional team led by Rick Good with years of experience"
            />
            <FeatureCard
              icon={<Clock className="w-12 h-12 text-red-600" />}
              title="24/7 Emergency Service"
              description="Available around the clock for urgent chimney issues"
            />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive chimney care services to keep your home safe and your chimney functioning properly</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <ServiceCard
              icon={<Shield className="w-12 h-12 text-red-600" />}
              title="Chimney Inspections"
              description="Thorough safety inspections and assessments"
              features={[
                'Level 1 & 2 Inspections',
                'Video Scanning',
                'Safety Evaluations',
                'Detailed Reports'
              ]}
            />
            <ServiceCard
              icon={<PenTool className="w-12 h-12 text-red-600" />}
              title="Chimney Repairs"
              description="Expert repairs and maintenance services"
              features={[
                'Crown Repair',
                'Flashing Repair',
                'Masonry Work',
                'Liner Installation'
              ]}
            />
            <ServiceCard
              icon={<Flame className="w-12 h-12 text-red-600" />}
              title="Chimney Cleaning"
              description="Professional cleaning and maintenance"
              features={[
                'Creosote Removal',
                'Soot Cleanup',
                'Debris Removal',
                'Annual Maintenance'
              ]}
            />
             <ServiceCard
              icon={<HomeIcon className="w-12 h-12 text-red-600" />}
              title="Sales and Installations"
              description="Professional sales and installations"
              features={[
                'Chimney Caps and Chase Covers',
                'Fireplace Doors and Accessories',
                'Gas Logs',
                'Wood Stoves'
              ]}
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Rick Good</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                With over 13 years of experience serving the Upstate South Carolina area, Rick Good and his team at Good Chimney Services 
                are committed to providing top-quality chimney services to homeowners. We take pride in our work and ensure 
                every job is done right the first time.
              </p>
              <ul className="space-y-4">
                {[
                  'Licensed and Insured Professional',
                  'Over 15 Years of Experience',
                  'Local Family-Owned Business',
                  '24/7 Emergency Services',
                  'Satisfaction Guaranteed'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <CheckCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://i.postimg.cc/htRJZMHG/Goods-Chimney.jpg" 
                alt="Chimney Service"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Partner Websites Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Valued Partners</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="https://www.kumastoves.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
              <img src="https://i.postimg.cc/XvX5vyRF/Kumastoves.jpg" alt="Kuma Stoves" className="h-20 w-auto" />
            </a>
            <a href="https://highvalleystoves.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
              <img src="https://i.postimg.cc/yxrZ2XQd/Highvalleystoves.jpg" alt="High Valley Stoves" className="h-20 w-auto" />
            </a>
             <a href="https://www.stollindustries.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
              <img src="https://i.postimg.cc/FHqjw7Qs/Stollindustries.jpg" alt="Stoll Industries" className="h-20 w-auto" />
            </a>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let us help you maintain a safe and efficient chimney system.
          </p>
          <a href="tel:8643786065" className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center hover:bg-gray-100 transition-all">
            <Phone className="w-5 h-5 mr-2" />
            Call (864) 378-6065
          </a>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ContactInfo
              icon={<Phone className="w-8 h-8" />}
              title="Call Rick Today (864) 378-6065"
              info="604 Heyward Ave, Honea Path, SC 29654"
              description="Available 24/7 for emergencies"
            />
            <ContactInfo
              icon={<MapPin className="w-8 h-8" />}
              title="Service Area"
              info="Upstate South Carolina"
              description="Servicing Anderson, Abbeville, Greenville, Greenwood, and other surrounding areas"
            />
            <ContactInfo
              icon={<Clock className="w-8 h-8" />}
              title="Business Hours"
              info="Monday - Saturday"
              description="8:00 AM - 5:00 PM"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Good Chimney Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex justify-center mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
      <div className="flex justify-center mb-6">{icon}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <CheckCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  info: string;
  description: string;
}

function ContactInfo({ icon, title, info, description }: ContactInfoProps) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-6">{icon}</div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-xl mb-2">{info}</p>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default App;
