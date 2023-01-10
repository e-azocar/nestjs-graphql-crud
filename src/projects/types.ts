import { registerEnumType } from '@nestjs/graphql';

export enum ProjectStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

registerEnumType(ProjectStatus, {
  name: 'CreateProjectStatus',
});
