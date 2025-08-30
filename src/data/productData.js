import { backToSchoolProducts } from "./schoolData";
import { officeProducts } from "./officeData";
import { featuredProducts } from "./featureData";
import { fileProducts } from "./fileData";
import { paperProducts } from "./paperData";
import { penProducts } from "./penData";
import { schoolSuppliesProducts } from "./schoolSuppliesData";
import { trendingProducts } from "./trendingData";
export const allProducts = [...officeProducts, ...backToSchoolProducts, ...featuredProducts, ...fileProducts, ...paperProducts, ...penProducts, ...schoolSuppliesProducts, ...trendingProducts];
