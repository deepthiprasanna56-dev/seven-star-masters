import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Sports from './pages/Sports';
import Membership from './pages/Membership';
import Coaches from './pages/Coaches';
import Events from './pages/Events';
import Contact from './pages/Contact';

// Modals
import MembershipModal from './components/MembershipModal';
import CoachBookingModal from './components/CoachBookingModal';
import EventRegisterModal from './components/EventRegisterModal';
import VideoModal from './components/VideoModal';

export default function App() {
  // Modal states
  const [membershipModalOpen, setMembershipModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('premium');

  const [coachModalOpen, setCoachModalOpen] = useState(false);
  const [selectedCoach, setSelectedCoach] = useState(null);

  const [eventModalOpen, setEventModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const handleOpenMembershipModal = (plan = 'premium') => {
    setSelectedPlan(plan);
    setMembershipModalOpen(true);
  };

  const handleOpenCoachModal = (coach) => {
    setSelectedCoach(coach);
    setCoachModalOpen(true);
  };

  const handleOpenEventModal = (event) => {
    setSelectedEvent(event);
    setEventModalOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#060609] text-gray-100 flex flex-col font-['Outfit'] selection:bg-red-600 selection:text-white">
        
        {/* Navigation */}
        <Navbar onOpenMembershipModal={() => handleOpenMembershipModal('premium')} />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onOpenMembershipModal={handleOpenMembershipModal}
                  onOpenCoachModal={handleOpenCoachModal}
                  onOpenEventModal={handleOpenEventModal}
                  onOpenVideoModal={() => setVideoModalOpen(true)}
                />
              }
            />
            <Route
              path="/about"
              element={<About onOpenMembershipModal={handleOpenMembershipModal} />}
            />
            <Route
              path="/sports"
              element={
                <Sports
                  onOpenMembershipModal={handleOpenMembershipModal}
                  onOpenCoachModal={handleOpenCoachModal}
                />
              }
            />
            <Route
              path="/membership"
              element={<Membership onOpenMembershipModal={handleOpenMembershipModal} />}
            />
            <Route
              path="/coaches"
              element={<Coaches onOpenCoachModal={handleOpenCoachModal} />}
            />
            <Route
              path="/events"
              element={<Events onOpenEventModal={handleOpenEventModal} />}
            />
            <Route path="/contact" element={<Contact />} />
            {/* Catch-all */}
            <Route
              path="*"
              element={
                <Home
                  onOpenMembershipModal={handleOpenMembershipModal}
                  onOpenCoachModal={handleOpenCoachModal}
                  onOpenEventModal={handleOpenEventModal}
                  onOpenVideoModal={() => setVideoModalOpen(true)}
                />
              }
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Modals */}
        <MembershipModal
          isOpen={membershipModalOpen}
          onClose={() => setMembershipModalOpen(false)}
          preselectedPlan={selectedPlan}
        />

        <CoachBookingModal
          isOpen={coachModalOpen}
          onClose={() => setCoachModalOpen(false)}
          coach={selectedCoach}
        />

        <EventRegisterModal
          isOpen={eventModalOpen}
          onClose={() => setEventModalOpen(false)}
          event={selectedEvent}
        />

        <VideoModal
          isOpen={videoModalOpen}
          onClose={() => setVideoModalOpen(false)}
        />

      </div>
    </Router>
  );
}
