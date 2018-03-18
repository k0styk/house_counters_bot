/* eslint-disable */

exports.up = function(knex, Promise) {
    return Promise.all([
      knex.raw('CREATE TABLE "public"."prices" ( \
            "id" serial NOT NULL, \
            "water" json NOT NULL, \
            "electricity" json NOT NULL, \
            CONSTRAINT prices_pk PRIMARY KEY ("id") \
        ) WITH (OIDS=FALSE);'),
        
      knex('public.prices').insert([
        {
          name: 'вода горячая',
          price: '129.32',
          code: 'hot'
        },
        {
          name: 'вода холодная',
          price: '51.94',
          code: 'cold'
        },
        {
          name: 'электричество',
          price: '2.39',
          code: 'el'
        },
        {
          name: 'Т1',
          price: '2.65',
          code: 't1'
        },
        {
          name: 'Т2',
          price: '1.91',
          code: 't2'
        },
      ]),
  
      knex.raw('CREATE TABLE "water_meter_types" ( \
        "id" serial NOT NULL, \
        "description" TEXT NOT NULL, \
        CONSTRAINT water_meter_types_pk PRIMARY KEY ("id") \
			) WITH (OIDS=FALSE);'),
			
			knex('public.water_meter_types').insert([
        {
          description: '2 счётчика',
				},
				{
          description: '4 счётчика',
        }
      ]),
  
      knex.raw('CREATE TABLE "electricity_meter_types" ( \
				"id" serial NOT NULL, \
				"description" TEXT NOT NULL, \
				CONSTRAINT electricity_meter_types_pk PRIMARY KEY ("id") \
			) WITH (OIDS=FALSE);'),

			knex('public.electricity_meter_types').insert([
        {
          description: 'Один тариф',
				},
				{
          description: 'Два тарифа',
        }
      ]),
    ]);
  };
  
  exports.down = function(knex, Promise) {
    return Promise.all([
      knex.raw('DROP TABLE "public"."prices";'),
      knex.raw('DROP TABLE "public"."water_meter_types";'),
      knex.raw('DROP TABLE "public"."electricity_meter_types";'),
    ]);
  };
  