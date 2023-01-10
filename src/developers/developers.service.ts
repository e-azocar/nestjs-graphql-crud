import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Developer } from './developers.entity';
import { CreateDeveloperInput } from './dto/create-developer.input';
import { UpdateDeveloperInput } from './dto/update-developer.input';

@Injectable()
export class DevelopersService {
  constructor(
    @InjectRepository(Developer)
    private developerRepository: Repository<Developer>,
  ) {}

  findAll(): Promise<Developer[]> {
    return this.developerRepository.find({
      relations: {
        roles: true,
        projects: true,
      },
    });
  }

  findOne(id: number): Promise<Developer> {
    return this.developerRepository.findOne({
      where: {
        id,
      },
      relations: {
        roles: true,
        projects: true,
      },
    });
  }

  createDeveloper(
    createDeveloperInput: CreateDeveloperInput,
  ): Promise<Developer> {
    const newDeveloper = this.developerRepository.create(createDeveloperInput);
    newDeveloper.roles = createDeveloperInput.rolesId.map((roleId) => ({
      id: roleId,
    }));
    return this.developerRepository.save(newDeveloper);
  }

  updateDeveloper(
    id: number,
    updateDeveloperInput: UpdateDeveloperInput,
  ): Promise<Developer> {
    const updatedDeveloper: Developer = {
      id,
      ...updateDeveloperInput,
    };
    updatedDeveloper.roles = updateDeveloperInput.rolesId.map((roleId) => ({
      id: roleId,
    }));

    return this.developerRepository.save({
      id,
      ...updatedDeveloper,
    });
  }
}
