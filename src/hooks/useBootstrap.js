import { useEffect } from 'react';

export default function useBootstrap() {
  useEffect(() => {
    // Initialize Bootstrap components
    const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltips.forEach(el => {
      new bootstrap.Tooltip(el);
    });

    const dropdowns = document.querySelectorAll('.dropdown-toggle');
    dropdowns.forEach(el => {
      new bootstrap.Dropdown(el);
    });
  }, []);
}