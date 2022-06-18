FROM postgres:9.6
ENV POSTGRES_DB finfast_db
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD postgres

RUN mkdir -p /docker-entrypoint-initdb.d

COPY ./ddl.sql /docker-entrypoint-initdb.d

COPY ./dev_data.sql /docker-entrypoint-initdb.d

RUN sed -i 's/^# *\(en_US.UTF-8\|de_DE.UTF-8\)/\1/' /etc/locale.gen && \
        locale-gen
ENV LANG en_US.utf8

EXPOSE 5432
