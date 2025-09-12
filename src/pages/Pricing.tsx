import React from 'react';
import { Check, Star, Users, BookOpen, Video, Download, Calendar, Award } from 'lucide-react';
import { useMembership } from '../context/MembershipContext';

const Pricing = () => {
  const { membershipType, setMembershipType } = useMembership();

  const plans = [
    {
      id: 'student',
      name: 'Student Plan',
      price: 25,
      period: 'one-time',
      description: 'Perfect for students and early-career professionals - one-time payment',
      icon: BookOpen,
      popular: false,
      features: [
        'Access to all training modules',
        'Monthly webinar recordings',
        'Basic knowledge resources',
        'Community forum access',
        'Email support',
        'Progress tracking',
        'Mobile app access',
        'Downloadable resources'
      ],
      limitations: [
        'No live webinar participation',
        'Limited 1-on-1 support'
      ]
    },
    {
      id: 'professional',
      name: 'Professional Plan',
      price: 50,
      period: 'one-time',
      description: 'Ideal for working professionals and organizations - one-time payment',
      icon: Award,
      popular: true,
      features: [
        'Everything in Student Plan',
        'Live webinar participation',
        'Priority support',
        'Advanced case studies',
        'Certification preparation',
        'Industry reports access',
        '1-on-1 expert consultations',
        'Custom learning paths',
        'Team collaboration tools',
        'Advanced analytics'
      ],
      limitations: []
    }
  ];

  const handleSubscribe = (planId: string) => {
    setMembershipType(planId as 'student' | 'professional');
    // Here you would typically integrate with a payment processor
    alert(`Successfully subscribed to ${planId} plan!`);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Learning Path
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock your potential with our comprehensive reliability engineering training programs. 
            Choose the plan that best fits your career goals and learning needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular ? 'ring-4 ring-blue-500 ring-opacity-50' : ''
              } ${membershipType === plan.id ? 'ring-4 ring-green-500 ring-opacity-50' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-2" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Current Plan Badge */}
              {membershipType === plan.id && (
                <div className="absolute -top-4 right-4">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Current Plan
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                    plan.popular ? 'bg-gradient-to-br from-blue-500 to-blue-600' : 'bg-gray-100'
                  }`}>
                    <plan.icon className={`h-8 w-8 ${plan.popular ? 'text-white' : 'text-gray-600'}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, index) => (
                    <div key={index} className="flex items-start opacity-60">
                      <div className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 flex items-center justify-center">
                        <div className="w-3 h-3 border-2 border-gray-400 rounded-full"></div>
                      </div>
                      <span className="text-gray-500 line-through">{limitation}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleSubscribe(plan.id)}
                  disabled={membershipType === plan.id}
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                    membershipType === plan.id
                      ? 'bg-green-500 text-white cursor-not-allowed'
                      : plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transform hover:scale-105'
                      : 'bg-gray-900 text-white hover:bg-gray-800 transform hover:scale-105'
                  }`}
                >
                  {membershipType === plan.id ? 'Current Plan' : 'Subscribe Now'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Features Comparison */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            What's Included in Each Plan
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Video className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Live & Recorded Content</h4>
              <p className="text-gray-600">
                Access to comprehensive video library and live expert sessions for real-time learning.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Expert Community</h4>
              <p className="text-gray-600">
                Connect with industry professionals and get guidance from experienced mentors.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Certification Ready</h4>
              <p className="text-gray-600">
                Prepare for industry certifications with our structured learning paths and practice exams.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h4 className="text-xl font-semibold mb-3">Can I switch plans anytime?</h4>
              <p className="text-gray-300">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-3">Is there a free trial?</h4>
              <p className="text-gray-300">
                We offer a 7-day free trial for new users to explore our platform and content before committing.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-3">What payment methods do you accept?</h4>
              <p className="text-gray-300">
                We accept all major credit cards, PayPal, and bank transfers for annual subscriptions.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-3">Do you offer group discounts?</h4>
              <p className="text-gray-300">
                Yes, we offer special pricing for teams of 5+ members. Contact us for custom enterprise solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have advanced their careers with our comprehensive 
            reliability engineering training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;