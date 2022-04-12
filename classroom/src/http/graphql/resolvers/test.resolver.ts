import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../../../database/prisma/prisma.service';
import { AuthorizationGuard } from '../../auth/authorization.guard';
import { Product } from '../models/product';

@Resolver('test')
export class TestResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [Product])
  @UseGuards(AuthorizationGuard)
  hello() {
    return 'this.prisma.product.findMany()';
  }
}
