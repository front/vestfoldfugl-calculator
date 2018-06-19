import '../../stencil.core';
import { Ingredient } from './types';
export declare class VestfoldFuglCalc {
    recipeId: number;
    numPersons: number;
    defaultNum: number;
    ingredients: Ingredient[];
    title: string;
    componentDidLoad(): Promise<void>;
    addPerson: (ev: any) => void;
    removePerson: (ev: any) => void;
    render(): JSX.Element;
}
