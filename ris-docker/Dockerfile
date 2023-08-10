FROM python:3.8

RUN apt update -qy && \
    apt install -y --no-install-recommends git git-lfs libgl1

WORKDIR /ris

RUN git lfs install
RUN git lfs clone https://github.com/Artori-kun/MTA-MedRIS

WORKDIR /ris/MTA-MedRIS

RUN pip install wheel
RUN pip install -r requirements.txt
RUN python init_feature_db.py

# RUN python init_db.py

EXPOSE 5000

CMD python init_db.py && python app.py

