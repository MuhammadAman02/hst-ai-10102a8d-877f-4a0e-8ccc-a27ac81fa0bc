import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from '@/lib/stripe';
import PaymentForm from '@/components/PaymentForm';
import SubscriptionPlans from '@/components/SubscriptionPlans';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CreditCard, Package } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Stripe Integration Demo
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience seamless payments and subscription management with our Stripe integration
          </p>
        </div>

        <Tabs defaultValue="payment" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="payment" className="flex items-center space-x-2">
              <CreditCard className="w-4 h-4" />
              <span>One-time Payment</span>
            </TabsTrigger>
            <TabsTrigger value="subscriptions" className="flex items-center space-x-2">
              <Package className="w-4 h-4" />
              <span>Subscription Plans</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="payment" className="space-y-8">
            <Elements stripe={stripePromise}>
              <PaymentForm />
            </Elements>
          </TabsContent>

          <TabsContent value="subscriptions" className="space-y-8">
            <SubscriptionPlans />
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-sm p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-2">Environment Setup</h3>
            <p className="text-sm text-gray-600">
              To use this demo with real payments, add your Stripe publishable key to your environment variables as 
              <code className="bg-gray-100 px-2 py-1 rounded mx-1">VITE_STRIPE_PUBLISHABLE_KEY</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;