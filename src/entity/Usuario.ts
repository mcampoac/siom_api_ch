import { Entity, Unique, Column } from 'typeorm';
import { MinLength, IsNotEmpty } from 'class-validator';

@Entity()
@Unique(['username'])
export class Usuario {

  @Column()
  @MinLength(50)
  @IsNotEmpty()
  usua_login: string;

  @Column()
  @MinLength(150)
  @IsNotEmpty()
  usua_password: string;

  @Column()
  @MinLength(12)
  @IsNotEmpty()
  usua_rut: string;

  @Column()
  @MinLength(10)
  @IsNotEmpty()
  usua_alias: string;

  @Column()
  @MinLength(300)
  @IsNotEmpty()
  usua_nombre: string;

}
