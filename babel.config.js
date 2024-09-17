module.exports = {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript'
    ],
    plugins: ['@babel/plugin-transform-runtime'],
    ignore: [
      '**/node_modules/**'
    ],
    overrides: [
      {
        test: ['node_modules/react-leaflet/**', 'node_modules/leaflet/**'],
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          '@babel/preset-typescript'
        ]
      }
    ]
  };
  