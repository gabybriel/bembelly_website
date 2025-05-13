import React from 'react';
import Hero from '../components/Hero';
import TeamMemberCard from '../components/TeamMemberCard';
import { teamMembers } from '../data/teamMembers';
import { BookOpen, Users, Target, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="About Our Firm"
        subtitle="Meet the team dedicated to your success"
        backgroundImage="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        height="medium"
      />
      
      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-secondary-900 mb-6">
                Our Story
              </h2>
              <p className="text-secondary-700 mb-6">
                Founded in 1995 by Amanda Robertson, our firm began with a clear mission: to provide 
                exceptional legal services with integrity, dedication, and a personal touch.
              </p>
              <p className="text-secondary-700 mb-6">
                Over the past 30 years, we've grown from a small practice to a respected 
                legal team serving individuals and businesses throughout the region. Our success 
                is built on our commitment to our clients and our community.
              </p>
              <p className="text-secondary-700">
                Today, Robertson & Associates continues to uphold the values that have guided us 
                from the beginning: excellence in legal representation, ethical practice, and 
                unwavering client advocacy.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5668865/pexels-photo-5668865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Law office building" 
                className="w-full h-auto rounded-lg shadow-md"
              />
              <div className="absolute -bottom-4 -left-4 bg-primary-700 text-white p-4 rounded shadow-md hidden md:block">
                <p className="font-serif font-bold text-lg">30+ Years</p>
                <p className="text-sm">Of Legal Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-secondary-700 max-w-3xl mx-auto">
              These principles guide every aspect of our practice and client relationships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-full mb-4">
                <BookOpen className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="font-serif text-xl font-bold text-secondary-900 mb-3">
                Excellence
              </h3>
              <p className="text-secondary-600">
                We strive for the highest standards in legal representation and client service.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-full mb-4">
                <Users className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="font-serif text-xl font-bold text-secondary-900 mb-3">
                Integrity
              </h3>
              <p className="text-secondary-600">
                We adhere to the highest ethical standards in all aspects of our practice.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-full mb-4">
                <Target className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="font-serif text-xl font-bold text-secondary-900 mb-3">
                Client Focus
              </h3>
              <p className="text-secondary-600">
                We prioritize our clients' needs and tailor our approach to their unique circumstances.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-full mb-4">
                <Award className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="font-serif text-xl font-bold text-secondary-900 mb-3">
                Innovation
              </h3>
              <p className="text-secondary-600">
                We embrace forward-thinking approaches to address complex legal challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-secondary-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-secondary-700 max-w-3xl mx-auto">
              Our experienced attorneys bring diverse expertise and a shared commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Statistics Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-serif text-4xl sm:text-5xl font-bold mb-2">30+</p>
              <p className="text-primary-100">Years of Experience</p>
            </div>
            <div>
              <p className="font-serif text-4xl sm:text-5xl font-bold mb-2">1000+</p>
              <p className="text-primary-100">Successful Cases</p>
            </div>
            <div>
              <p className="font-serif text-4xl sm:text-5xl font-bold mb-2">15+</p>
              <p className="text-primary-100">Practice Areas</p>
            </div>
            <div>
              <p className="font-serif text-4xl sm:text-5xl font-bold mb-2">98%</p>
              <p className="text-primary-100">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;