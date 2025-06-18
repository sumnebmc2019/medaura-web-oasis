
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { NavLink } from 'react-router-dom';
import { Heart, Users, Award, Globe, ArrowRight, Star } from 'lucide-react';
import Layout from '@/components/Layout';

const Index = () => {
  const features = [
    {
      icon: Heart,
      title: "World-Class Healthcare",
      description: "Advanced medical treatments with international standards"
    },
    {
      icon: Users,
      title: "Expert Medical Team",
      description: "Highly qualified doctors and healthcare professionals"
    },
    {
      icon: Award,
      title: "Accredited Hospitals",
      description: "JCI and NABH accredited partner hospitals"
    },
    {
      icon: Globe,
      title: "Medical Tourism",
      description: "Comprehensive medical tourism packages"
    }
  ];

  const packages = [
    {
      title: "Total Knee Replacement",
      description: "Complete knee replacement surgery with rehabilitation",
      price: "Starting from ₹2,50,000",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Aura Rejuvenation",
      description: "Holistic wellness and rejuvenation therapy",
      price: "Starting from ₹75,000",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      title: "Cardiac Care",
      description: "Comprehensive cardiac treatment and surgery",
      price: "Starting from ₹3,50,000",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "USA",
      text: "Exceptional care and treatment. The medical team was professional and caring throughout my knee replacement surgery.",
      rating: 5
    },
    {
      name: "Ahmed Al-Rashid",
      country: "UAE",
      text: "MedAura India provided world-class cardiac treatment at an affordable cost. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Chen",
      country: "Singapore",
      text: "The aura rejuvenation package was exactly what I needed. Feeling refreshed and renewed!",
      rating: 5
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Your Journey to
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                  Better Health
                </span>
                Starts Here
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience world-class healthcare in India with MedAura. We provide comprehensive medical tourism services, combining advanced treatments with holistic wellness approaches.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <NavLink to="/medical-tourism">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4">
                    Start Your Journey
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </NavLink>
                <NavLink to="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4">
                    Free Consultation
                  </Button>
                </NavLink>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl p-8">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                  alt="Healthcare Professional" 
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose MedAura India?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge medical technology with compassionate care to deliver exceptional healthcare experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-purple-50">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Packages */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Treatment Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Curated healthcare packages designed to provide comprehensive treatment and care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-0">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{pkg.title}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-blue-600">{pkg.price}</span>
                    <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <NavLink to="/medical-tourism">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                View All Packages
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read experiences from patients who trusted MedAura India for their healthcare journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-blue-50 to-purple-50">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.country}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Healthcare Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get personalized treatment recommendations and start your path to better health today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink to="/medical-tourism">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4">
                Get Treatment Quote
              </Button>
            </NavLink>
            <NavLink to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4">
                Book Consultation
              </Button>
            </NavLink>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
