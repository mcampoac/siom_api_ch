import { Entity, PrimaryGeneratedColumn, Unique, CreateDateColumn, UpdateDateColumn, Column } from "typeorm";
import { MinLength, IsNotEmpty, IsEmail } from 'class-validator';

@Entity()
@Unique(['usua_id'])
export class Usuario {

    @PrimaryGeneratedColumn()
    usua_id: string;
    
    @Column()
    empr_id: string;
    
    @Column()
    usua_login: string;
    
    @Column()
    usua_password: string;
    
    @Column()
    usua_rut: string;
    
    @Column()
    usua_alias: string;
    
    @Column()
    usua_nombre: string;
    
    @Column()
    usua_cargo: string;
    
    @Column()
    usua_correo_electronico: string;
    
    @Column()
    usua_telefono_fijo: string;
    
    @Column()
    usua_telefono_movil: string;
    
    @Column()
    usua_direccion: string;
    
    @Column()
    usua_fecha_creacion: string;
    
    @Column()
    usua_creador: string;
    
    @Column()
    usua_acceso_web: string;
    
    @Column()
    usua_acceso_movil: string;
    
    @Column()
    usua_acceso_api: string;
    
    @Column()
    usua_estado: string;
    
    @Column()
    usua_opciones: string;
    
    @Column()
    usua_crypt_pass: string;
    
    @Column()
    usua_selfie_tecnico: string;
    
    @Column()
    api_token: string;
    
    @Column()
    api_token_expires_in: string;

}
