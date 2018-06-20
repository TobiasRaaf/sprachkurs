import { DictCategory } from './dictCategory';

export interface DictEntry {
	id: string;
	german: string;
	otherLang: string;
	category: DictCategory;
}