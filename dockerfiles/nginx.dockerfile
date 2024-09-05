# Gunakan image dasar Nginx
FROM nginx:alpine

# Hapus konfigurasi default Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Salin file konfigurasi Nginx yang telah disesuaikan
COPY nginx/default.conf /etc/nginx/conf.d/

# Expose port untuk Nginx
EXPOSE 80

# Jalankan Nginx
CMD ["nginx", "-g", "daemon off;"]
