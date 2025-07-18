import '@mantine/core/styles.css';
import 'leaflet/dist/leaflet.css';

import { Providers } from '../components/Providers/Providers';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'The Discovery Panel',
  description: 'Explore the World from Your Browser',
  icons: {
    icon: '/globe-fav.ico',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
