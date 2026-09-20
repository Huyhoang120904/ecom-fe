"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { products, searchSuggestions } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/format";

const STORAGE_KEY = "ecome_recent_searches";

export function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [recentList, setRecentList] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load recent searches from localStorage or fallback to default
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setRecentList(parsed);
          return;
        }
      }
    } catch {
      // ignore JSON parse errors
    }
    setRecentList(searchSuggestions.recent);
  }, []);

  // Save to recent searches
  const saveRecentSearch = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setRecentList((prev) => {
      const filtered = prev.filter((item) => item.toLowerCase() !== trimmed.toLowerCase());
      const updated = [trimmed, ...filtered].slice(0, 6);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {
        // ignore storage errors
      }
      return updated;
    });
  };

  // Clear all recent searches
  const clearAllRecent = () => {
    setRecentList([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  // Delete single recent search
  const removeRecentItem = (e: React.MouseEvent, itemToRemove: string) => {
    e.stopPropagation();
    setRecentList((prev) => {
      const updated = prev.filter((item) => item !== itemToRemove);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle submit search
  const handleSearch = (searchTerm = query) => {
    const term = searchTerm.trim();
    if (term) {
      saveRecentSearch(term);
      setIsOpen(false);
      router.push(`/search?q=${encodeURIComponent(term)}`);
    }
  };

  const handleSelectKeyword = (keyword: string) => {
    setQuery(keyword);
    handleSearch(keyword);
  };

  // Real-time filtering when user types
  const trimmedQuery = query.trim().toLowerCase();
  const filteredProducts = trimmedQuery
    ? products.filter((p) => {
        const fullText = `${p.name} ${p.category} ${p.brand} ${p.shop.name}`.toLowerCase();
        return fullText.includes(trimmedQuery);
      }).slice(0, 4)
    : products.slice(0, 3); // 3 items exactly as in the design screenshot

  return (
    <div className="search-wrap" ref={containerRef}>
      <form
        className="search-form"
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <span className="search-leading" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>
        <input
          ref={inputRef}
          type="search"
          aria-label="Tìm kiếm sản phẩm"
          value={query}
          onFocus={() => setIsOpen(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            if (!isOpen) setIsOpen(true);
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setIsOpen(false);
              inputRef.current?.blur();
            }
          }}
          placeholder="Tìm sản phẩm, thương hiệu hoặc danh mục"
          autoComplete="off"
        />
        {query.length > 0 && (
          <button
            type="button"
            className="search-clear-input"
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            aria-label="Xóa từ khóa"
          >
            ✕
          </button>
        )}
        <button type="submit" className="search-submit-btn" aria-label="Tìm kiếm">
          Tìm
        </button>
      </form>

      {isOpen && (
        <div className="search-popover">
          {/* If typing and has matching products */}
          {trimmedQuery ? (
            <div className="search-popover-section">
              <div className="search-popover-heading">
                <strong>Kết quả cho “{query}”</strong>
                <span className="search-result-count">{filteredProducts.length} sản phẩm</span>
              </div>
              {filteredProducts.length > 0 ? (
                <>
                  <div className="search-product-list">
                    {filteredProducts.map((product) => (
                      <Link
                        key={product.id}
                        href={`/product/${product.slug}`}
                        className="search-product"
                        onClick={() => {
                          saveRecentSearch(product.name);
                          setIsOpen(false);
                        }}
                      >
                        <div
                          className="search-product-thumb"
                          style={{ backgroundImage: `url(${product.image})` }}
                          role="img"
                          aria-label={product.name}
                        />
                        <div className="search-product-info">
                          <strong className="search-product-title">{product.name}</strong>
                          <span className="search-product-meta">
                            {product.category} · {product.shop.name}
                          </span>
                          <span className="search-product-price">{formatCurrency(product.price)}</span>
                        </div>
                        <span className="search-product-arrow">→</span>
                      </Link>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="search-view-more"
                    onClick={() => handleSearch(query)}
                  >
                    Xem tất cả kết quả cho “{query}” <span>→</span>
                  </button>
                </>
              ) : (
                <div className="search-empty-state">
                  <div className="search-empty-state-icon">⌕</div>
                  <strong>Không tìm thấy kết quả phù hợp</strong>
                  <p>Thử tìm kiếm với từ khóa khác như "laptop", "iphone", "cardigan"...</p>
                </div>
              )}
            </div>
          ) : (
            /* Default state when input is empty - matches screenshot accurately */
            <>
              {recentList.length > 0 && (
                <div className="search-popover-section">
                  <div className="search-popover-heading">
                    <strong>Tìm kiếm gần đây</strong>
                    <button type="button" onClick={clearAllRecent} className="search-clear-all-btn">
                      Xóa
                    </button>
                  </div>
                  <div className="search-chips">
                    {recentList.map((item) => (
                      <button
                        type="button"
                        key={item}
                        className="search-chip"
                        onClick={() => handleSelectKeyword(item)}
                      >
                        <span className="search-chip-icon">↺</span>
                        <span className="search-chip-text">{item}</span>
                        <span
                          className="search-chip-delete"
                          title="Xóa mục này"
                          onClick={(e) => removeRecentItem(e, item)}
                        >
                          ×
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="search-popover-section">
                <div className="search-popover-heading">
                  <strong>Đang được tìm nhiều</strong>
                </div>
                <div className="search-chips trending">
                  {searchSuggestions.trending.map((item) => (
                    <button
                      type="button"
                      key={item}
                      className="search-chip trending"
                      onClick={() => handleSelectKeyword(item)}
                    >
                      <span className="search-chip-icon">↗</span>
                      <span className="search-chip-text">{item}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="search-popover-section">
                <div className="search-popover-heading">
                  <strong>Gợi ý sản phẩm</strong>
                  <Link
                    href="/products"
                    className="search-view-all-link"
                    onClick={() => setIsOpen(false)}
                  >
                    Xem tất cả
                  </Link>
                </div>
                <div className="search-product-list">
                  {filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.slug}`}
                      className="search-product"
                      onClick={() => {
                        saveRecentSearch(product.name);
                        setIsOpen(false);
                      }}
                    >
                      <div
                        className="search-product-thumb"
                        style={{ backgroundImage: `url(${product.image})` }}
                        role="img"
                        aria-label={product.name}
                      />
                      <div className="search-product-info">
                        <strong className="search-product-title">{product.name}</strong>
                        <span className="search-product-meta">
                          {product.category} · {product.shop.name}
                        </span>
                      </div>
                      <span className="search-product-arrow">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
