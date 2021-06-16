from django.contrib import admin

from .models import Deliveries, Group, Shipping, Transaction

class TransactionAdmin(admin.ModelAdmin):
    list_display = ('user', 'item', 'date', 'company', 'price') # Changes what is displayed in the admin page for Transaction model
    list_filter = ('user',) # Sort by user
    search_fields = ('user__username', 'item', 'date', 'price')
    list_per_page = 20

class DeliveriesAdmin(admin.ModelAdmin):
    list_display = ('user', 'name', 'tkg_number', 'courier_name')
    list_filter = ('user', 'courier_name')
    search_fields = ('user__username', 'name', 'tkg_number', 'courier_name')
    list_per_page = 20

class ShippingAdmin(admin.ModelAdmin):
    list_display = ('group_name', 'platform', 'location')
    list_filter = ('platform', 'location')
    search_fields = ('group_name', 'platform', 'location')
    list_per_page = 20

class GroupAdmin(admin.ModelAdmin):
    list_display = ('group_name', 'owner')
    list_filter = ('owner',)
    search_fields = ('group_name','owner')
    list_per_page = 20

admin.site.register(Transaction, TransactionAdmin)
admin.site.register(Deliveries, DeliveriesAdmin)
admin.site.register(Shipping, ShippingAdmin)
admin.site.register(Group, GroupAdmin)