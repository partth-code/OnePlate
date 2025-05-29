import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, Calendar, Package, Users, Building, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const ContributorProfile = () => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [pickupRequests, setPickupRequests] = useState([]);
  const [volunteerApplications, setVolunteerApplications] = useState([]);
  const [partnerApplications, setPartnerApplications] = useState([]);

  useEffect(() => {
    if (user) {
      fetchUserData();
    }
  }, [user]);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      
      // Fetch pickup requests
      const { data: pickups, error: pickupError } = await supabase
        .from('pickup_requests')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (pickupError) throw pickupError;

      // Fetch volunteer applications
      const { data: volunteers, error: volunteerError } = await supabase
        .from('volunteers')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (volunteerError) throw volunteerError;

      // Fetch partner applications
      const { data: partners, error: partnerError } = await supabase
        .from('partner_applications')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (partnerError) throw partnerError;

      setPickupRequests(pickups || []);
      setVolunteerApplications(volunteers || []);
      setPartnerApplications(partners || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Signed out successfully",
        description: "Thank you for using OnePlate!",
      });
      navigate('/');
    } catch (error: any) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl shadow-lg p-8 mb-8 text-white">
          <div className="flex items-center space-x-6">
            <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
              <User className="w-12 h-12 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Welcome back!</h1>
              <div className="flex items-center space-x-4 mt-2 text-white/90">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>{user?.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Member since {new Date(user?.created_at || '').toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl shadow-lg text-white">
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Pickup Requests</h3>
                <p className="text-2xl font-bold">{pickupRequests.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl shadow-lg text-white">
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Volunteer Applications</h3>
                <p className="text-2xl font-bold">{volunteerApplications.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl shadow-lg text-white">
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                <Building className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Partner Applications</h3>
                <p className="text-2xl font-bold">{partnerApplications.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Pickup Requests */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Recent Pickup Requests</h2>
            {pickupRequests.length > 0 ? (
              <div className="space-y-4">
                {pickupRequests.slice(0, 3).map((pickup: any) => (
                  <div key={pickup.id} className="bg-white/50 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-white/70 transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-800">{pickup.organization_name || 'Food Pickup'}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        pickup.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        pickup.status === 'completed' ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {pickup.status || 'pending'}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{pickup.address}</p>
                    <p className="text-gray-500 text-xs">
                      Scheduled: {pickup.pickup_date} ({pickup.pickup_time})
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No pickup requests yet.</p>
            )}
          </div>

          {/* Applications */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Applications Status</h2>
            <div className="space-y-4">
              {volunteerApplications.length > 0 && (
                <div className="bg-white/50 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-white/70 transition-all duration-300">
                  <h3 className="font-semibold text-gray-800">Volunteer Application</h3>
                  <p className="text-gray-600 text-sm">Applied on {new Date(volunteerApplications[0].created_at).toLocaleDateString()}</p>
                  <span className="inline-block mt-2 px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                    Under Review
                  </span>
                </div>
              )}
              
              {partnerApplications.length > 0 && (
                <div className="bg-white/50 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-white/70 transition-all duration-300">
                  <h3 className="font-semibold text-gray-800">Partner Application</h3>
                  <p className="text-gray-600 text-sm">{partnerApplications[0].organization_name}</p>
                  <p className="text-gray-500 text-xs">Applied on {new Date(partnerApplications[0].created_at).toLocaleDateString()}</p>
                  <span className="inline-block mt-2 px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                    {partnerApplications[0].status || 'pending'}
                  </span>
                </div>
              )}

              {volunteerApplications.length === 0 && partnerApplications.length === 0 && (
                <p className="text-gray-500">No applications submitted yet.</p>
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl shadow-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <Button className="bg-white text-green-500 hover:bg-blue-50 hover:text-green-600 transition-all duration-300" asChild>
              <a href="/schedule-pickup">Schedule New Pickup</a>
            </Button>
            {volunteerApplications.length === 0 && (
              <Button className="bg-white text-green-500 hover:bg-blue-50 hover:text-green-600 transition-all duration-300" asChild>
                <a href="/become-volunteer">Apply as Volunteer</a>
              </Button>
            )}
            {partnerApplications.length === 0 && (
              <Button className="bg-white text-green-500 hover:bg-blue-50 hover:text-green-600 transition-all duration-300" asChild>
                <a href="/apply-partner">Apply as Partner</a>
              </Button>
            )}
            <Button 
              onClick={handleSignOut}
              className="bg-white/10 text-white border-2 border-white hover:bg-white hover:text-green-500 transition-all duration-300 flex items-center space-x-2"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributorProfile;
