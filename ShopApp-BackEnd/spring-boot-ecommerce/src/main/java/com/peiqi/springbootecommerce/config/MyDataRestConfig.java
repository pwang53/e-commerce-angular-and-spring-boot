package com.peiqi.springbootecommerce.config;

import com.peiqi.springbootecommerce.entity.Product;
import com.peiqi.springbootecommerce.entity.ProductCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.EntityType;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

// Make it read only
@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {
    private EntityManager entityManager;

    @Autowired
    public MyDataRestConfig(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        HttpMethod[] theUnsupportedActions = {HttpMethod.PUT, HttpMethod.POST, HttpMethod.DELETE};

        // Disable Http methods for Products: PUT, POST and Delete
        config.getExposureConfiguration()
                .forDomainType(Product.class)
                .withItemExposure(((metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions)))
                .withCollectionExposure(((metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions)));

        // Disable Http methods for Products: PUT, POST and Delete
        config.getExposureConfiguration()
                .forDomainType(ProductCategory.class)
                .withItemExposure(((metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions)))
                .withCollectionExposure(((metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions)));

        // Call an internal helper method
        exposeIds(config);
    }

    // Expose id of the entity
    private void exposeIds(RepositoryRestConfiguration config) {
        // - gets a list of all entity classes from the entity manager
        Set<EntityType<?>> entities = entityManager.getMetamodel().getEntities();

        // - create an array of the entity class
        List<Class> entityClasses = new ArrayList<>();

        // - get the entity types for the entities
        for (EntityType t: entities) {
            entityClasses.add(t.getJavaType());
            System.out.println(t.getJavaType());
        }

        // - expose the entity ids for the array of entity/domain types
        Class[] domainTypes = new Class[entities.size()];
        domainTypes = entityClasses.toArray(domainTypes);

        // - use exposeIdsFor() to expose id
        config.exposeIdsFor(domainTypes);
    }
}
