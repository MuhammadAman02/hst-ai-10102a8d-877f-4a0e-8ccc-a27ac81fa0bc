import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap } from 'lucide-react';

const SubscriptionPlans = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$9.99',
      period: '/month',
      description: 'Perfect for getting started',
      features: [
        'Up to 5 projects',
        'Basic support',
        '1GB storage',
        'Standard features'
      ],
      popular: false,
      icon: <Check className="w-5 h-5" />
    },
    {
      name: 'Pro',
      price: '$29.99',
      period: '/month',
      description: 'Most popular choice',
      features: [
        'Unlimited projects',
        'Priority support',
        '10GB storage',
        'Advanced features',
        'Team collaboration'
      ],
      popular: true,
      icon: <Star className="w-5 h-5" />
    },
    {
      name: 'Enterprise',
      price: '$99.99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Everything in Pro',
        'Custom integrations',
        'Unlimited storage',
        'Dedicated support',
        'Advanced security',
        'Custom branding'
      ],
      popular: false,
      icon: <Zap className="w-5 h-5" />
    }
  ];

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Select the perfect plan for your needs. All plans include a 14-day free trial.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <Card 
            key={index} 
            className={`relative ${plan.popular ? 'border-blue-500 shadow-lg scale-105' : ''}`}
          >
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600">
                Most Popular
              </Badge>
            )}
            
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                {plan.icon}
              </div>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-600">{plan.period}</span>
              </div>
            </CardHeader>

            <CardContent>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                    : ''
                }`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                Get Started
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlans;