# Generated by Django 3.2.4 on 2021-06-21 07:18

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='data',
            name='items',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=200), default=list, size=None),
        ),
        migrations.AlterField(
            model_name='data',
            name='prices',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.DecimalField(decimal_places=2, max_digits=6), default=list, size=None),
        ),
    ]