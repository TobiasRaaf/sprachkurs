package com.sprachkurskonzept.app.web.config;

import com.sprachkurskonzept.app.app.config.DatabaseConfig;
import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;

public class CategoryWebAppInitializer implements WebApplicationInitializer {
    @Override
    public void onStartup(ServletContext container) throws ServletException {
        AnnotationConfigWebApplicationContext webContext = new AnnotationConfigWebApplicationContext();
            webContext.register(DatabaseConfig.class);
            webContext.register(CategoryWebMVCConfig.class);
            webContext.setServletContext(container);
            ServletRegistration.Dynamic reg=container.addServlet("dispatcherServlet", new DispatcherServlet(webContext));
            reg.setLoadOnStartup(1);
            reg.addMapping("*.action");
    }
}
