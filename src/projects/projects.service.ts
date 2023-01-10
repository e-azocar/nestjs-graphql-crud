import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GraphQLError } from 'graphql';
import { DevelopersService } from 'src/developers/developers.service';
import { Repository } from 'typeorm';
import { AddDeveloperInput } from './dto/add-developer.input';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Project } from './project.entity';
import { ProjectStatus } from './types';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project) private projectRepository: Repository<Project>,
    private developersService: DevelopersService,
  ) {}

  create(createProjectInput: CreateProjectInput): Promise<Project> {
    const newProject = this.projectRepository.create(createProjectInput);
    newProject.roles = createProjectInput.rolesId.map((roleId) => ({
      id: roleId,
    }));
    return this.projectRepository.save(newProject);
  }

  async findAll(roleId?: number, status?: ProjectStatus): Promise<Project[]> {
    const projects = await this.projectRepository.find({
      where: {
        status,
      },
      relations: {
        roles: true,
        developers: {
          roles: true,
        },
      },
    });

    return projects.filter((project) =>
      roleId ? project.roles.some((role) => role.id === roleId) : true,
    );
  }

  findOne(id: number) {
    return this.projectRepository.findOne({
      where: {
        id,
      },
      relations: {
        roles: true,
        developers: true,
      },
    });
  }

  async addDeveloper(
    id: number,
    addDeveloperInput: AddDeveloperInput,
  ): Promise<Project> {
    const developer = await this.developersService.findOne(
      addDeveloperInput.developerId,
    );
    const project = await this.findOne(id);
    const projectRoles = project.roles?.map((role) => role.id);
    const projectDevs = project.developers?.map((dev) => dev.id);

    if (!developer.roles?.some((role) => projectRoles.includes(role.id)))
      throw new GraphQLError(
        "Developer doesn't have the required role for this project",
        {
          extensions: {
            code: 'BAD_USER_INPUT',
          },
        },
      );

    if (projectDevs.includes(developer.id))
      throw new GraphQLError('Developer already assigned to this project', {
        extensions: {
          code: 'BAD_USER_INPUT',
        },
      });

    return this.projectRepository.save({
      ...project,
      developers: [...project.developers, developer],
    });
  }

  update(id: number, updateProjectInput: UpdateProjectInput): Promise<Project> {
    const updatedProject: Project = {
      id,
      ...updateProjectInput,
    };
    updatedProject.roles = updateProjectInput.rolesId.map((roleId) => ({
      id: roleId,
    }));

    return this.projectRepository.save({
      id,
      ...updatedProject,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
