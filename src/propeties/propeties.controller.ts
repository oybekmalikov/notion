import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PropetiesService } from './propeties.service';
import { CreatePropetyDto } from './dto/create-propety.dto';
import { UpdatePropetyDto } from './dto/update-propety.dto';

@Controller('propeties')
export class PropetiesController {
  constructor(private readonly propetiesService: PropetiesService) {}

  @Post()
  create(@Body() createPropetyDto: CreatePropetyDto) {
    return this.propetiesService.create(createPropetyDto);
  }

  @Get()
  findAll() {
    return this.propetiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propetiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePropetyDto: UpdatePropetyDto) {
    return this.propetiesService.update(+id, updatePropetyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propetiesService.remove(+id);
  }
}
