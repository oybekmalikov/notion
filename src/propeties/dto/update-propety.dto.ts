import { PartialType } from '@nestjs/mapped-types';
import { CreatePropetyDto } from './create-propety.dto';

export class UpdatePropetyDto extends PartialType(CreatePropetyDto) {}
