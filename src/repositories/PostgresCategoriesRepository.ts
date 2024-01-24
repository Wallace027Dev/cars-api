import { Category } from "../model/Category";
import { ICategoriesRepostory, ICreateCategoryDTO } from "./ICategoriesRepostory";

class PostgresCategoriesRepository implements ICategoriesRepostory {
	findByName(name: string): Category {
		console.log(name);
		return null;
	}
	list(): Category[] {
		return null;

	}
	create({ description, name }: ICreateCategoryDTO): void {
		console.log(name, description);
	}

}

export { PostgresCategoriesRepository };
