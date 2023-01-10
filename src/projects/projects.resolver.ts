import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProjectsService } from './projects.service';
import { Project } from './project.entity';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { AddDeveloperInput } from './dto/add-developer.input';
import { ProjectStatus } from './types';

@Resolver(() => Project)
export class ProjectsResolver {
  constructor(private readonly projectsService: ProjectsService) {}

  @Mutation(() => Project)
  createProject(
    @Args('createProjectInput') createProjectInput: CreateProjectInput,
  ) {
    return this.projectsService.create(createProjectInput);
  }

  @Query(() => [Project], { name: 'projects' })
  findAll(
    @Args('roleId', { type: () => Int, nullable: true }) roleId: number,
    @Args('status', { type: () => ProjectStatus, nullable: true })
    status: ProjectStatus,
  ) {
    return this.projectsService.findAll(roleId, status);
  }

  @Query(() => Project, { name: 'project' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.projectsService.findOne(id);
  }

  @Mutation(() => Project)
  addDeveloper(
    @Args('addDeveloperInput') addDeveloperInput: AddDeveloperInput,
  ) {
    return this.projectsService.addDeveloper(
      addDeveloperInput.id,
      addDeveloperInput,
    );
  }

  @Mutation(() => Project)
  updateProject(
    @Args('updateProjectInput') updateProjectInput: UpdateProjectInput,
  ) {
    return this.projectsService.update(
      updateProjectInput.id,
      updateProjectInput,
    );
  }

  @Mutation(() => Project)
  removeProject(@Args('id', { type: () => Int }) id: number) {
    return this.projectsService.remove(id);
  }
}
