import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Persona extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 30 })
    name: string;

    @Column({ type: 'varchar', length: 30 })
    lastname: string;

    @OneToMany(() => Cliente, cliente => cliente.persona)
    clientes: Cliente[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}

@Entity()
export class Cliente extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 50 })
    email: string;

    @Column({ type: 'varchar', length: 50 })
    address: string;

    @ManyToOne(() => Persona, persona => persona.clientes)
    @JoinColumn()
    persona: Persona;

    @OneToMany(() => Factura, factura => factura.cliente)
    facturas: Factura[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}

@Entity()
export class Factura extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100 })
    concepto: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    monto: number;

    @ManyToOne(() => Cliente, cliente => cliente.facturas)
    @JoinColumn()
    cliente: Cliente;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
