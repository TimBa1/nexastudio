/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com']
  },
    webpack(config, { isServer, dev }) {
      const prefix = config.assetPrefix ?? config.basePath ?? '';
  
      // Updated rule to match both .mp4 and .MP4 files
      config.module.rules.push({
        test: /\.(mp4|MP4)$/,  // This will match both lowercase and uppercase .mp4
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: `${prefix}/_next/static/media/`,
              outputPath: `${dev ? '' : '../'}${isServer ? '../' : ''}static/media/`,
              name: '[name].[hash:8].[ext]',
            },
          },
        ],
      });
  
      return config;
    },
  };
  
  export default nextConfig;
  