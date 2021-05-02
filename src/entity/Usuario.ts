import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { MaxLength, IsNotEmpty } from 'class-validator';

@Entity()
export class Usuario {

  @PrimaryGeneratedColumn()
  usua_id: number;

  @Column()
  empr_id: number;

  @Column()
  @MaxLength(50)
  @IsNotEmpty()
  usua_login: string;

  @Column()
  @MaxLength(150)
  @IsNotEmpty()
  usua_password: string;

  @Column()
  @MaxLength(12)
  @IsNotEmpty()
  usua_rut: string;

  @Column()
  @MaxLength(10)
  @IsNotEmpty()
  usua_alias: string;

  @Column()
  @MaxLength(300)
  @IsNotEmpty()
  usua_nombre: string;

  @Column()
  @MaxLength(50)
  @IsNotEmpty()
  usua_cargo: string;

  @Column()
  @MaxLength(50)
  @IsNotEmpty()
  usua_correo_electronico: string;

  @Column()
  @MaxLength(50)
  @IsNotEmpty()
  usua_telefono_fijo: string;

  @Column()
  @MaxLength(50)
  @IsNotEmpty()
  usua_telefono_movil: string;

  @Column()
  @MaxLength(150)
  @IsNotEmpty()
  usua_direccion: string;

  @CreateDateColumn()
  @IsNotEmpty()
  usua_fecha_creacion: Date;

  @Column()
  usua_creador: number;

  @Column()
  usua_acceso_web: boolean;

  @Column()
  usua_acceso_movil: boolean;

  @Column()
  usua_acceso_api: boolean;

  @Column()
  usua_estado: string;

  @Column()
  usua_opciones: string;

  @Column()
  @MaxLength(255)
  @IsNotEmpty()
  usua_crypt_pass: string;

  @Column()
  @MaxLength(2)
  @IsNotEmpty()
  usua_selfie_tecnico: string;

  @Column()
  @MaxLength(80)
  @IsNotEmpty()
  api_token: string;

  @CreateDateColumn({ type: 'datetime' })
  api_token_expires_in: Date;

}
