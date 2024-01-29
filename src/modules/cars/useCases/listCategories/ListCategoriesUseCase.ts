import { Category } from "../../model/Category";
import { ICategoriesRepository  } from "../../repositories/ICategoriesRepostory";

class ListCategoriesUseCase {
	constructor(private categoriesRepository: ICategoriesRepository) {}

	execute(): Category[] {
		const categories = this.categoriesRepository.list();

		return categories;
	}
}

export { ListCategoriesUseCase };