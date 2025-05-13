import React from 'react';
import { Testimonial } from '../types';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 relative">
      <Quote className="text-primary-100 w-12 h-12 absolute top-4 right-4" />
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.imageUrl} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-secondary-900">{testimonial.name}</h4>
          <p className="text-sm text-secondary-500">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-secondary-700 italic">{testimonial.content}</p>
    </div>
  );
};

export default TestimonialCard;