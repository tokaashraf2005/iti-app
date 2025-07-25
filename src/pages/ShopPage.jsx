import React, { useState } from 'react';
import '../styles/shop.css';
import productsData from '../data/productsShop';
import ShopBanner from '../components/shop/ShopBanner';
import ShopFilters from '../components/shop/ShopFilters';
import ProductGrid from '../components/shop/ProductGrid';
import ShowMoreButton from '../components/shop/ShowMoreButton';
import Newsletter from '../components/layout/Newsletter';

function ShopPage() {
  const [category, setCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('All Price');
  const [sortBy, setSortBy] = useState('');
  const [viewMode, setViewMode] = useState('view-grid-4');

  const filteredProducts = productsData
    .filter((product) => {
      const matchCategory = category === 'All' || product.category === category;
       const price = product.oldPrice;
      let matchPrice = true;
      switch (priceRange) {
        case '$0.00 - $99.99':
          matchPrice = price >= 0 && price <= 99.99;
          break;
        case '$100.00 - $199.99':
          matchPrice = price >= 100 && price <= 199.99;
          break;
        case '$200.00 - $299.99':
          matchPrice = price >= 200 && price <= 299.99;
          break;
        case '$300.00 - $399.99':
          matchPrice = price >= 300 && price <= 399.99;
          break;
        case '$400.00+':
          matchPrice = price >= 400;
          break;
        default:
          matchPrice = true;
      }
      return matchCategory && matchPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name-asc':
          return a.title.localeCompare(b.title);
        case 'name-desc':
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

  return (
    <div>
      <ShopBanner />

      <ShopFilters
        category={category}
        setCategory={setCategory}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        sortBy={sortBy}
        setSortBy={setSortBy}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />
      <ProductGrid products={filteredProducts} viewMode={viewMode} />
      <ShowMoreButton />
      <Newsletter /> 
      
    </div>
  );
}

export default ShopPage;