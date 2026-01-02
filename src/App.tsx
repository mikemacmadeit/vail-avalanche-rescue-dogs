import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import AvalancheRescue from './pages/AvalancheRescue';
import MeetTheTeam from './pages/MeetTheTeam';
import AvalancheSafety from './pages/AvalancheSafety';
import AvalancheConditions from './pages/AvalancheConditions';
import HenrysLegacy from './pages/HenrysLegacy';
import TrainingCertification from './pages/TrainingCertification';
import Support from './pages/Support';

function App() {
  return (
    <>
      {/* Enhanced Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                '@id': 'https://vailavalancherescuedogs.org/#organization',
                name: 'Vail Avalanche Rescue Dogs',
                alternateName: 'Vail Ski Patrol Avalanche Rescue Dogs',
                url: 'https://vailavalancherescuedogs.org',
                logo: 'https://vailavalancherescuedogs.org/logo.png',
                description: 'Certified avalanche rescue dogs and handlers protecting Vail Mountain, Colorado. Training, certification, and backcountry rescue operations.',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Vail',
                  addressRegion: 'CO',
                  addressCountry: 'US',
                  postalCode: '81657',
                },
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: '39.6403',
                  longitude: '-106.3742',
                },
                areaServed: {
                  '@type': 'Mountain',
                  name: 'Vail Mountain',
                },
                knowsAbout: ['Avalanche Rescue', 'Search and Rescue', 'Ski Patrol', 'Backcountry Safety', 'Avalanche Safety'],
                memberOf: {
                  '@type': 'Organization',
                  name: 'Vail Ski Patrol',
                },
              },
              {
                '@type': 'LocalBusiness',
                '@id': 'https://vailavalancherescuedogs.org/#localbusiness',
                name: 'Vail Avalanche Rescue Dogs',
                image: 'https://vailavalancherescuedogs.org/og-image.jpg',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Vail Mountain',
                  addressLocality: 'Vail',
                  addressRegion: 'CO',
                  postalCode: '81657',
                  addressCountry: 'US',
                },
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: '39.6403',
                  longitude: '-106.3742',
                },
                url: 'https://vailavalancherescuedogs.org',
                telephone: '+1-970-754-8245',
                priceRange: 'Free',
                openingHoursSpecification: {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                  opens: '08:00',
                  closes: '17:00',
                },
              },
              {
                '@type': 'Service',
                '@id': 'https://vailavalancherescuedogs.org/#service',
                serviceType: 'Avalanche Rescue and Search Operations',
                provider: {
                  '@id': 'https://vailavalancherescuedogs.org/#organization',
                },
                areaServed: {
                  '@type': 'Mountain',
                  name: 'Vail Mountain',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Vail',
                    addressRegion: 'CO',
                    addressCountry: 'US',
                  },
                },
                description: 'Certified K9 avalanche rescue teams providing search and rescue operations on Vail Mountain, Colorado. Specialized in deep burial detection, high-altitude operations, and backcountry avalanche safety.',
              },
              {
                '@type': 'BreadcrumbList',
                '@id': 'https://vailavalancherescuedogs.org/#breadcrumb',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://vailavalancherescuedogs.org/',
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Avalanche Rescue',
                    item: 'https://vailavalancherescuedogs.org/avalanche-rescue',
                  },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: 'Meet the Team',
                    item: 'https://vailavalancherescuedogs.org/meet-the-team',
                  },
                ],
              },
            ],
          }),
        }}
      />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/avalanche-rescue" element={<AvalancheRescue />} />
            <Route path="/meet-the-team" element={<MeetTheTeam />} />
            <Route path="/avalanche-safety" element={<AvalancheSafety />} />
            <Route path="/avalanche-conditions" element={<AvalancheConditions />} />
            <Route path="/henrys-legacy" element={<HenrysLegacy />} />
            <Route path="/training-certification" element={<TrainingCertification />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
