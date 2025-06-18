
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Award, Globe, Target, Eye } from 'lucide-react';
import Layout from '@/components/Layout';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient with empathy, respect, and dignity"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest standards of medical care"
    },
    {
      icon: Users,
      title: "Patient-Centered",
      description: "Every decision is made with our patients' best interests at heart"
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "International quality healthcare accessible to all"
    }
  ];

  const team = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Chief Medical Officer",
      specialization: "Cardiac Surgery",
      experience: "25+ years",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      name: "Dr. Priya Sharma",
      role: "Head of Orthopedics",
      specialization: "Joint Replacement",
      experience: "20+ years",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      name: "Dr. Amit Patel",
      role: "Medical Tourism Director",
      specialization: "Patient Care Coordination",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
    },
    {
      name: "Dr. Sunita Reddy",
      role: "Wellness & Rejuvenation Specialist",
      specialization: "Holistic Medicine",
      experience: "18+ years",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742"
    }
  ];

  const milestones = [
    { year: "2010", event: "MedAura India founded with a vision to make quality healthcare accessible" },
    { year: "2015", event: "Achieved JCI accreditation for international quality standards" },
    { year: "2018", event: "Expanded to medical tourism, serving patients from 50+ countries" },
    { year: "2020", event: "Launched telemedicine services and virtual consultations" },
    { year: "2022", event: "Opened state-of-the-art wellness and rejuvenation center" },
    { year: "2024", event: "Serving 10,000+ international patients annually" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}MedAura India
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transforming healthcare through compassion, innovation, and excellence. 
              We are dedicated to providing world-class medical care that heals both body and spirit.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  MedAura India was born from a simple yet powerful vision: to make world-class healthcare 
                  accessible to everyone, regardless of their geographical or economic constraints. Founded in 2010 
                  by a team of passionate healthcare professionals, we began our journey with a commitment to 
                  bridge the gap between excellent medical care and affordability.
                </p>
                <p>
                  Over the years, we have grown from a small clinic to a comprehensive healthcare ecosystem, 
                  serving thousands of patients from around the world. Our name "MedAura" reflects our belief 
                  in the healing aura that surrounds quality medical care combined with genuine compassion.
                </p>
                <p>
                  Today, we stand as a beacon of hope for patients seeking advanced medical treatments, 
                  holistic wellness solutions, and rejuvenation therapies. Our integration of modern medicine 
                  with traditional healing practices creates a unique healthcare experience that treats not 
                  just the disease, but the whole person.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl p-8">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
                  alt="MedAura India Facility" 
                  className="w-full h-80 object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 bg-white shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide accessible, affordable, and world-class healthcare services while maintaining 
                  the highest standards of medical excellence. We strive to create healing experiences that 
                  restore not just physical health, but also emotional and spiritual well-being.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading healthcare destination that transforms lives through innovative medical 
                  solutions, compassionate care, and holistic wellness approaches. We envision a world where 
                  quality healthcare knows no boundaries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-lg text-gray-600">Experienced professionals dedicated to your health and well-being</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden border-0 bg-white hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-1">{member.specialization}</p>
                  <p className="text-gray-500 text-sm">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">Key milestones in our commitment to excellence</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-bold text-sm mr-6 flex-shrink-0">
                    {milestone.year}
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-700 leading-relaxed">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the MedAura Difference?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of patients who have trusted us with their healthcare journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
