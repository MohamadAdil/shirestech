import BootstrapSetup from './components/layout/BootstrapSetup';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
export const metadata = {
  title: "Shires Tech",
  description: "Generated by Shires Tech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <BootstrapSetup />
      </body>
    </html>
  );
}
