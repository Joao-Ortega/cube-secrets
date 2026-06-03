import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ThemeRegistry from '@/components/ThemeRegistry';

export const metadata = {
  title: 'Cube Secrets | Tudo sobre o Cubo Mágico',
  // description: 'Aprenda a montar o cubo mágico e encontre os melhores acessórios.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeRegistry>
          <Navbar />
          <main style={{ minHeight: '100vh', paddingBottom: '40px' }}>
            {children}
          </main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}