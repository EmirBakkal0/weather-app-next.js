/** @type {import('next').NextConfig} */
const nextConfig = {
   
        images: {
          remotePatterns: [
            {
              protocol: 'http',
              hostname: 'cdn.weatherapi.com/',
              port: '',
              pathname: '/weather/**',
            },
          ],
        },
      



};



export default nextConfig;
