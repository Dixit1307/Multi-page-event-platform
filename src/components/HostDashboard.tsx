import { motion } from 'motion/react';
import {
  Plus,
  Calendar,
  Users,
  Image as ImageIcon,
  Video,
  Download,
  Share2,
  QrCode,
  BarChart,
  Settings,
  Eye,
  Trash2,
  ExternalLink,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HostDashboardProps {
  onNavigate: (page: string) => void;
}

export function HostDashboard({ onNavigate }: HostDashboardProps) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const stats = [
    {
      icon: Calendar,
      label: 'Total Events',
      value: '12',
      change: '+3 this month',
      gradient: 'from-[#FFB200] to-[#FF4D67]',
    },
    {
      icon: ImageIcon,
      label: 'Photos Collected',
      value: '2,847',
      change: '+432 this week',
      gradient: 'from-[#FF4D67] to-[#176B87]',
    },
    {
      icon: Video,
      label: 'Videos Collected',
      value: '186',
      change: '+24 this week',
      gradient: 'from-[#176B87] to-[#B8E4D0]',
    },
    {
      icon: Users,
      label: 'Active Guests',
      value: '847',
      change: 'Across all events',
      gradient: 'from-[#B8E4D0] to-[#FFB200]',
    },
  ];

  const events = [
    {
      id: 1,
      name: 'Priya & Rahul Wedding',
      date: 'Nov 15, 2025',
      type: 'Wedding',
      status: 'Active',
      photos: 847,
      videos: 32,
      guests: 235,
      views: 1245,
      plan: 'Premium',
      image: 'https://images.unsplash.com/photo-1645856052472-95fe99103c11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzYyMjI5MTE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      name: 'Aarav Birthday Party',
      date: 'Nov 8, 2025',
      type: 'Birthday',
      status: 'Active',
      photos: 423,
      videos: 18,
      guests: 45,
      views: 567,
      plan: 'Plus',
      image: 'https://images.unsplash.com/photo-1650584997985-e713a869ee77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzYyMjI3ODA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      name: 'Tech Corp Annual Day',
      date: 'Oct 25, 2025',
      type: 'Corporate',
      status: 'Completed',
      photos: 612,
      videos: 45,
      guests: 180,
      views: 892,
      plan: 'Premium',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudHxlbnwxfHx8fDE3NjIyNDA0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      name: 'College Fest 2025',
      date: 'Oct 12, 2025',
      type: 'College Fest',
      status: 'Completed',
      photos: 965,
      videos: 91,
      guests: 387,
      views: 2134,
      plan: 'Plus',
      image: 'https://images.unsplash.com/photo-1653285634338-9481a8ed9c12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZmVzdGl2YWwlMjBjcm93ZHxlbnwxfHx8fDE3NjIyNDA0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const planColors: { [key: string]: string } = {
    Free: 'bg-gray-100 text-gray-700',
    Plus: 'bg-gradient-to-r from-[#FFB200] to-[#FF4D67] text-white',
    Premium: 'bg-gradient-to-r from-[#FF4D67] to-[#176B87] text-white',
  };

  const statusColors: { [key: string]: string } = {
    Active: 'bg-green-100 text-green-700',
    Completed: 'bg-blue-100 text-blue-700',
    Draft: 'bg-gray-100 text-gray-700',
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-[#B8E4D0]/10">
      {/* Header */}
      <section className="py-12 bg-white border-b border-gray-100">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <motion.div variants={fadeInUp}>
              <h1 className="text-4xl md:text-5xl mb-2">
                Welcome back, <span className="bg-gradient-to-r from-[#FFB200] to-[#FF4D67] bg-clip-text text-transparent">Host</span>! 👋
              </h1>
              <p className="text-xl text-gray-600">
                Manage your events and collect beautiful memories
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Button
                onClick={() => onNavigate('pricing')}
                className="bg-gradient-to-r from-[#FFB200] to-[#FF4D67] hover:shadow-xl hover:scale-105 transition-all text-white border-0 px-8 py-6 text-lg group"
              >
                <Plus className="mr-2 w-5 h-5" />
                Create New Event
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <h3 className="text-3xl mb-1">{stat.value}</h3>
                <p className="text-sm text-gray-500 mb-2">{stat.label}</p>
                <p className="text-xs text-[#FFB200]">{stat.change}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl">Your Events</h2>
            <Button variant="outline" className="gap-2">
              <BarChart className="w-4 h-4" />
              View Analytics
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-100 group"
              >
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className={statusColors[event.status]}>
                      {event.status}
                    </Badge>
                    <Badge className={planColors[event.plan]}>
                      {event.plan}
                    </Badge>
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
                    >
                      <Eye className="w-4 h-4 text-gray-700" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
                    >
                      <Settings className="w-4 h-4 text-gray-700" />
                    </motion.button>
                  </div>
                </div>

                {/* Event Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl mb-1">{event.name}</h3>
                      <p className="text-sm text-gray-500 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {event.date} • {event.type}
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-t border-b border-gray-100">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <ImageIcon className="w-4 h-4 text-[#FFB200]" />
                        <p className="text-lg">{event.photos}</p>
                      </div>
                      <p className="text-xs text-gray-500">Photos</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Video className="w-4 h-4 text-[#FF4D67]" />
                        <p className="text-lg">{event.videos}</p>
                      </div>
                      <p className="text-xs text-gray-500">Videos</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Users className="w-4 h-4 text-[#176B87]" />
                        <p className="text-lg">{event.guests}</p>
                      </div>
                      <p className="text-xs text-gray-500">Guests</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="flex-1 gap-2 group/btn"
                    >
                      <QrCode className="w-4 h-4" />
                      QR Code
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 gap-2 group/btn"
                    >
                      <Share2 className="w-4 h-4" />
                      Share
                    </Button>
                    <Button
                      className="flex-1 gap-2 bg-gradient-to-r from-[#FFB200] to-[#FF4D67] text-white border-0 group/btn"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#FFB200] via-[#FF4D67] to-[#176B87] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl"
          >
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-3xl md:text-4xl mb-3">Need Help?</h3>
                  <p className="text-white/90 text-lg mb-4">
                    Check out our guides or contact support anytime
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      onClick={() => onNavigate('faq')}
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white hover:text-[#FF4D67]"
                    >
                      View FAQs
                    </Button>
                    <Button
                      onClick={() => onNavigate('contact')}
                      className="bg-white text-[#FF4D67] hover:bg-gray-100"
                    >
                      Contact Support
                    </Button>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-6xl md:text-8xl"
                >
                  <Sparkles className="w-20 h-20 md:w-24 md:h-24" />
                </motion.div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
