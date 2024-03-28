# Generated by Django 4.1.2 on 2024-03-28 15:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ListModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mode', models.CharField(max_length=255, verbose_name='Request Mode')),
                ('code', models.CharField(max_length=255, verbose_name='Request Code')),
                ('bar_code', models.CharField(max_length=255, verbose_name='Bar Code')),
                ('openid', models.CharField(max_length=255, verbose_name='Openid')),
                ('create_time', models.DateTimeField(auto_now_add=True, verbose_name='Create Time')),
                ('update_time', models.DateTimeField(auto_now=True, null=True, verbose_name='Update Time')),
            ],
            options={
                'verbose_name': 'Scanner',
                'verbose_name_plural': 'Scanner',
                'db_table': 'scanner',
                'ordering': ['-id'],
            },
        ),
    ]
