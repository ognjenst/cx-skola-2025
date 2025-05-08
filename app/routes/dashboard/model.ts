import { createAccessorModelProxy } from 'cx/data';

export interface ChartItem {
   month: string;
   sales: number;
   expenses: number;
   balance: number;
}

interface TopStat {
   id: string;
   name: string;
   percent: number;
}

export interface TopProductModel extends TopStat {
   sales: number;
}

export interface TopExpenseModel extends TopStat {
   expense: number;
}

export interface Model {
   $page: {
      firstName: string;
      chart: ChartItem[];
      charts: {
         sales: boolean;
         expenses: boolean;
         cash: boolean;
      };
      topProducts: TopProductModel[];
      topExpenses: TopExpenseModel[];
   };

   $record: ChartItem;
}

export default createAccessorModelProxy<Model>();
