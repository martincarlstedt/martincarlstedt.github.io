---
title: Kafka schema design
description: How to write kafka schemas that allows for evolution
date: '2023-03-03T00:00:00Z'
draft: true
---

```json
{
  "type": "record",
  "name": "ProductEvent",
  "namespace": "com.example",
  "fields": [
    {
      "name": "created",
      "type": [
        "null",
        {
          "type": "record",
          "name": "Created",
          "fields": [
            {
              "name": "id",
              "type": {
                "type": "string",
                "logicalType": "uuid"
              }
            },
            {
              "name": "name",
              "type": "string"
            }
          ]
        }
      ],
      "default": null
    },
    {
      "name": "deleted",
      "type": [
        "null",
        {
          "type": "record",
          "name": "Deleted",
          "fields": [
            {
              "name": "id",
              "type": {
                "type": "string",
                "logicalType": "uuid"
              }
            }
          ]
        }
      ],
      "default": null
    }
  ]
}
```

Json representation

```json
{
  "created": {
    "id": "8bb1f0b9-9767-4d36-8c3b-518c0ef77e96",
    "name": "New Product"
  },
  "deleted": null
}
```

```kotlin
@Component
class ProductListener(
    private val productCreatedHandler: ProductCreatedHandler,
    private val productDeletedHandler: ProductDeletedHandler,
) {

    @KafkaListener(topics = ["product"])
    fun listen(record: ConsumerRecord<UUID, ProductEvent>) {
        val productEvent = record.value()

        productEvent.created?.also {
            productCreatedHandler.handle(
                NewProduct(
                    ProductId(it.id),
                    ProductName(it.name),
                ),
            )
        }

        productEvent.deleted?.also {
            productDeletedHandler.handle(ProductId(record.key()))
        }
    }
}
```
