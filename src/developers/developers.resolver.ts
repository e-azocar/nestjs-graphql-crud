import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Developer } from './developers.entity';
import { DevelopersService } from './developers.service';
import { CreateDeveloperInput } from './dto/create-developer.input';
import { UpdateDeveloperInput } from './dto/update-developer.input';

@Resolver()
export class DevelopersResolver {
  constructor(private developersService: DevelopersService) {}

  @Query(() => [Developer])
  developers() {
    return this.developersService.findAll();
  }

  @Query(() => Developer)
  async developer(@Args('id', { type: () => Int }) id: number) {
    return this.developersService.findOne(id);
  }

  @Mutation(() => Developer)
  createDeveloper(
    @Args('createDeveloperInput') developer: CreateDeveloperInput,
  ) {
    return this.developersService.createDeveloper(developer);
  }

  @Mutation(() => Developer)
  updateDeveloper(
    @Args('updateDeveloperInput') developer: UpdateDeveloperInput,
  ) {
    return this.developersService.updateDeveloper(developer.id, developer);
  }
}
