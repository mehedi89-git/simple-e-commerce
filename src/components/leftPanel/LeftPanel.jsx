import { ProductGrid } from "../product/ProductGrid";
import { FilterSection } from "./FilterSection";
import { Heading } from "./Heading";

export function LeftPanel({ addProductToCart,  }) {

 

    return (
      <div>
          <Heading />
          <FilterSection />
          <ProductGrid addProductToCart={addProductToCart} /> 
      </div>
    );
  }